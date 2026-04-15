# Stellar Todo DApp (Soroban Starter)

A beginner-friendly starter project for building a **Todo List smart contract** on Stellar using the Soroban SDK.

## Description

This repository is a simple workshop-style template that shows how to store and manage todo tasks directly on-chain.

Each task includes:
- `id` (`u32`)
- `title` (`String`)
- `description` (`String`)
- `completed` (`bool`)

The goal is educational clarity, not production-ready complexity.

## Vision

Help developers quickly understand how Soroban contract storage works by using a familiar use case: a basic todo list.

## Features

- Create tasks with auto-incrementing IDs
- Read all tasks from contract storage
- Mark tasks as completed
- Delete tasks by ID
- Clean Rust code with simple contract logic

## Future Improvements

- Add per-user task ownership
- Add task update/edit function
- Add due dates and priority levels
- Add pagination for large task lists
- Add authentication and access control

## Smart Contract Details

Contract: `TodoContract`

Functions:
- `create_task(env, title, description)`
  - Adds a new task with `completed = false`
  - Uses the current task list length as the next ID
- `get_tasks(env)`
  - Returns all stored tasks
- `complete_task(env, id)`
  - Finds task by ID and marks it as completed
- `delete_task(env, id)`
  - Removes task by ID from the stored list

## How It Works (Simple Flow)

1. The contract keeps all tasks in Soroban **persistent storage** under one key.
2. `create_task` reads existing tasks, appends a new task, and stores the list again.
3. `get_tasks` returns the full list.
4. `complete_task` loops through tasks, updates matching task, and saves.
5. `delete_task` builds a new list without the target ID, then saves it.

## Prerequisites

Install Rust using `rustup` (https://rustup.rs). This repository includes `rust-toolchain.toml`, so Rust will automatically use the stable toolchain with `rustfmt` and the `wasm32-unknown-unknown` target.

If your machine still shows a rustup default error, run:

```bash
rustup default stable
rustup target add wasm32-unknown-unknown
rustup component add rustfmt clippy
```

## Project Structure

```text
.
├── Cargo.toml
├── contracts
│   └── todo
│       ├── Cargo.toml
│       └── src
│           └── lib.rs
└── README.md
```

## Notes

This is a **learning/demo project** and intentionally keeps the implementation minimal.
