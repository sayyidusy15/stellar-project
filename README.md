# Stellar Todo DApp (Soroban Smart Contract)

## Deskripsi

Stellar Todo DApp merupakan aplikasi sederhana berbasis smart contract yang dibangun menggunakan Soroban SDK di blockchain Stellar. Aplikasi ini memungkinkan pengguna untuk mengelola daftar tugas (todo list) secara terdesentralisasi, dengan data yang disimpan langsung di dalam smart contract.

Proyek ini dibuat sebagai implementasi pembelajaran dasar pengembangan smart contract menggunakan Rust dan Soroban, dengan fokus pada operasi CRUD sederhana.

---

## Tujuan

* Memahami konsep dasar smart contract di Stellar (Soroban)
* Mengimplementasikan penyimpanan data on-chain
* Membangun aplikasi sederhana berbasis blockchain
* Menggunakan Rust untuk pengembangan smart contract

---

## Fitur

Aplikasi ini memiliki beberapa fitur utama:

* Menambahkan tugas baru (Create Task)
* Melihat seluruh daftar tugas (Get Tasks)
* Menandai tugas sebagai selesai (Complete Task)
* Menghapus tugas (Delete Task)

---

## Struktur Data

Smart contract menggunakan struktur data sebagai berikut:

* **Task**

  * `id`: ID unik tugas
  * `title`: Judul tugas
  * `description`: Deskripsi tugas
  * `completed`: Status tugas (true/false)

---

## Fungsi Smart Contract

Berikut adalah fungsi utama yang tersedia:

* `create_task(title, description)`
  Menambahkan tugas baru ke dalam sistem

* `get_tasks()`
  Mengambil seluruh daftar tugas yang tersimpan

* `complete_task(id)`
  Menandai tugas sebagai selesai

* `delete_task(id)`
  Menghapus tugas berdasarkan ID

---

## Contract ID (Testnet)

```
ISI_DENGAN_CONTRACT_ID_KAMU
```

---

## Cara Penggunaan

### 1. Build Contract

```bash
cargo build --target wasm32-unknown-unknown --release
```

### 2. Deploy ke Testnet

```bash
soroban contract deploy \
  --wasm target/wasm32-unknown-unknown/release/nama_file.wasm \
  --source default \
  --network testnet
```

### 3. Menjalankan Fungsi

Contoh menjalankan fungsi:

**Menambahkan tugas:**

```bash
soroban contract invoke \
  --id CONTRACT_ID \
  --source default \
  --network testnet \
  -- create_task \
  --title "Belajar Soroban" \
  --description "Mengerjakan tugas workshop"
```

**Melihat daftar tugas:**

```bash
soroban contract invoke \
  --id CONTRACT_ID \
  --source default \
  --network testnet \
  -- get_tasks
```

---

## Screenshot Hasil

Tambahkan screenshot hasil interaksi smart contract di bawah ini:

![Screenshot Testnet](link_atau_file_gambar_kamu)

---

## Teknologi yang Digunakan

* Rust
* Soroban SDK
* Stellar Blockchain (Testnet)
* Soroban CLI

---

## Pengembangan Selanjutnya

Beberapa pengembangan yang dapat dilakukan ke depan:

* Menambahkan fitur update task
* Menambahkan sistem autentikasi pengguna
* Integrasi dengan frontend (web interface)
* Menambahkan filter (completed / pending)
* Visualisasi data tugas

---

## Catatan

Proyek ini merupakan aplikasi sederhana untuk keperluan pembelajaran dan bukan untuk penggunaan produksi.
