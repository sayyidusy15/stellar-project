# Stellar Todo DApp

**Stellar Todo DApp** - Blockchain-Based Decentralized Todo List

## Project Description

Stellar Todo DApp is a simple starter project showcasing a decentralized Todo List smart contract built on the Stellar blockchain using Soroban SDK. It provides an educational, easy-to-understand structure for developers to learn the basics of blockchain storage and simple state transitions.

The project is designed to be minimal, without complex authentication or a frontend, allowing developers to focus solely on the smart contract logic and understand how data manipulation works on the Stellar network.

## Project Vision

Our vision is to provide a clean and robust template that simplifies learning Soroban smart contracts. By implementing a relatable use case—a Todo List—developers can easily grasp how to:
- Define simple data structures in Soroban
- Use persistent instance storage for lists and counters
- Create functional logic to manipulate on-chain state safely

## Key Features

### 1. **Create Tasks**
- Simply create a task by providing a title and a description.
- The smart contract automatically assigns an incremental `id` to uniquely identify each task.

### 2. **View Tasks**
- Fetch all current tasks stored on-chain.
- Understand how vectors (`Vec`) work inside Soroban instance storage.

### 3. **Complete Tasks**
- Mark any specific task as completed.
- Learn how to loop through and update stored records inside the contract.

### 4. **Delete Tasks**
- Remove tasks by their unique ID.
- Understand how to cleanly update storage to free up space.

## Smart Contract Details

The contract defines a core `Task` structure containing:
- `id` (u32): Auto-incremented unique identifier.
- `title` (String): The title of the task.
- `description` (String): Detailed information about the task.
- `completed` (bool): Status of the task.

### Functions

- `create_task(title: String, description: String) -> u32`
  Creates a new task and returns its new ID.
- `get_tasks() -> Vec<Task>`
  Returns a list of all stored tasks.
- `complete_task(id: u32)`
  Marks the specified task as completed.
- `delete_task(id: u32)`
  Deletes the specified task from storage.

## How It Works

1. The contract uses **Soroban instance storage** to persist data.
2. It tracks two pieces of state:
   - `TaskCount`: A counter (u32) used to assign unique incremental IDs.
   - `Tasks`: A vector (`Vec<Task>`) that holds the entire list of tasks.
3. Every time a task is created, `TaskCount` increments and the task is pushed into `Tasks`.
4. Updates (like completion or deletion) involve fetching `Tasks`, modifying the vector, and saving it back to storage.

## Future Scope

While this project is meant to be a simple starter, it can be extended by developers looking for a challenge:
1. **User Authentication:** Attach tasks to specific Stellar wallet addresses.
2. **Event Emission:** Emit Soroban events when tasks are created, updated, or deleted.
3. **Frontend Integration:** Build a minimal React/Next.js UI to interact with this contract using `@stellar/freighter-api`.

---

## Technical Requirements

- Soroban SDK
- Rust programming language
- Stellar blockchain network

## Getting Started

Deploy the smart contract to Stellar's Soroban network and interact with it using the CLI to understand how basic state management functions work on-chain. This is a learning/demo project. Have fun building!
