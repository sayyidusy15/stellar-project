#![no_std]

use soroban_sdk::{contract, contractimpl, contracttype, symbol_short, Env, String, Symbol, Vec};

#[contracttype]
#[derive(Clone)]
pub struct Task {
    pub id: u32,
    pub title: String,
    pub description: String,
    pub completed: bool,
}

#[contract]
pub struct TodoContract;

// Storage key used to keep all tasks in one persistent vector.
const TASKS_KEY: Symbol = symbol_short!("TASKS");

#[contractimpl]
impl TodoContract {
    // Create a new task with an incremental id.
    pub fn create_task(env: Env, title: String, description: String) {
        let mut tasks = Self::read_tasks(&env);
        let id = tasks.len();

        let task = Task {
            id,
            title,
            description,
            completed: false,
        };

        tasks.push_back(task);
        Self::write_tasks(&env, &tasks);
    }

    // Return all tasks from persistent storage.
    pub fn get_tasks(env: Env) -> Vec<Task> {
        Self::read_tasks(&env)
    }

    // Mark one task as completed using its id.
    pub fn complete_task(env: Env, id: u32) {
        let mut tasks = Self::read_tasks(&env);
        let mut index: u32 = 0;

        while index < tasks.len() {
            let mut task = tasks.get(index).unwrap();
            if task.id == id {
                task.completed = true;
                tasks.set(index, task);
                break;
            }
            index += 1;
        }

        Self::write_tasks(&env, &tasks);
    }

    // Delete one task using its id.
    pub fn delete_task(env: Env, id: u32) {
        let tasks = Self::read_tasks(&env);
        let mut updated_tasks: Vec<Task> = Vec::new(&env);
        let mut index: u32 = 0;

        while index < tasks.len() {
            let task = tasks.get(index).unwrap();
            if task.id != id {
                updated_tasks.push_back(task);
            }
            index += 1;
        }

        Self::write_tasks(&env, &updated_tasks);
    }

    fn read_tasks(env: &Env) -> Vec<Task> {
        env.storage()
            .persistent()
            .get(&TASKS_KEY)
            .unwrap_or(Vec::new(env))
    }

    fn write_tasks(env: &Env, tasks: &Vec<Task>) {
        env.storage().persistent().set(&TASKS_KEY, tasks);
    }
}
