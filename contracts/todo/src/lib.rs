#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, Env, String, Vec};

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct Task {
    pub id: u32,
    pub title: String,
    pub description: String,
    pub completed: bool,
}

#[contracttype]
pub enum DataKey {
    TaskCount,
    Tasks,
}

#[contract]
pub struct TodoContract;

#[contractimpl]
impl TodoContract {
    /// Creates a new task and stores it in the contract's instance storage.
    pub fn create_task(env: Env, title: String, description: String) -> u32 {
        // Get the current task count, default to 0
        let mut count: u32 = env.storage().instance().get(&DataKey::TaskCount).unwrap_or(0);

        // Increment the count to get the new task ID
        count += 1;

        // Create the new task
        let new_task = Task {
            id: count,
            title,
            description,
            completed: false,
        };

        // Fetch the existing list of tasks, or create an empty vector if none exist
        let mut tasks: Vec<Task> = env.storage().instance().get(&DataKey::Tasks).unwrap_or_else(|| Vec::new(&env));

        // Add the new task
        tasks.push_back(new_task);

        // Save the updated tasks list and the new count back to instance storage
        env.storage().instance().set(&DataKey::Tasks, &tasks);
        env.storage().instance().set(&DataKey::TaskCount, &count);

        count
    }

    /// Returns all tasks currently stored in the contract.
    pub fn get_tasks(env: Env) -> Vec<Task> {
        env.storage().instance().get(&DataKey::Tasks).unwrap_or_else(|| Vec::new(&env))
    }

    /// Marks a specific task as completed.
    pub fn complete_task(env: Env, id: u32) {
        let tasks: Vec<Task> = env.storage().instance().get(&DataKey::Tasks).unwrap_or_else(|| Vec::new(&env));
        let mut updated_tasks = Vec::new(&env);
        let mut found = false;

        for mut task in tasks.into_iter() {
            if task.id == id {
                task.completed = true;
                found = true;
            }
            updated_tasks.push_back(task);
        }

        if found {
            env.storage().instance().set(&DataKey::Tasks, &updated_tasks);
        } else {
            panic!("Task not found");
        }
    }

    /// Deletes a specific task.
    pub fn delete_task(env: Env, id: u32) {
        let tasks: Vec<Task> = env.storage().instance().get(&DataKey::Tasks).unwrap_or_else(|| Vec::new(&env));
        let mut updated_tasks = Vec::new(&env);
        let mut found = false;

        for task in tasks.into_iter() {
            if task.id == id {
                found = true;
                // Skip adding this task to updated_tasks
            } else {
                updated_tasks.push_back(task);
            }
        }

        if found {
            env.storage().instance().set(&DataKey::Tasks, &updated_tasks);
        } else {
            panic!("Task not found");
        }
    }
}
