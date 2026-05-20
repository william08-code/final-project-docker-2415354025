# Final Project Docker Deployment

## Identitas Mahasiswa

| Keterangan | Data |
|---|---|
| Nama | Yehezkiel William |
| NIM | 2415354025 |

---

# Deskripsi Project

Project ini merupakan implementasi **multi-container application** menggunakan **Docker** dan **Docker Compose**.

Aplikasi terdiri dari dua service utama:

- **Backend API** menggunakan Node.js dan Express.js
- **Database** menggunakan MySQL

## Fitur Project

- CRUD User API
- Environment Variable
- Docker Volume
- Docker Network
- Multi-container Deployment menggunakan Docker Compose

---

# Struktur Project

```bash
project-app/
│
├── docker-compose.yml
├── README.md
│
├── screenshot/
│   ├── docker-compose.png
│   ├── docker-ps.png
│   ├── docker-volume.png
│   ├── docker-network.png
│   ├── get-users.png
│   ├── post-users.png
│   ├── put-users.png
│   ├── delete-users.png
│   └── dockerhub.png
│
└── app/
    ├── Dockerfile
    ├── .dockerignore
    ├── .env
    ├── .env.example
    ├── package.json
    └── app.js
```

---

# Menjalankan Project

Jalankan perintah berikut untuk build dan menjalankan seluruh container:

```bash
docker compose up --build
```

Jika berhasil, aplikasi akan berjalan di:

```bash
http://localhost:3000
```

---

# Endpoint API

| Method | Endpoint | Deskripsi |
|---|---|---|
| GET | /users | Menampilkan semua user |
| POST | /users | Menambahkan user baru |
| PUT | /users/:id | Mengupdate data user |
| DELETE | /users/:id | Menghapus data user |

---

# Pengujian Docker Compose

## Menjalankan Container

```bash
docker compose up --build
```

### Hasil

Container aplikasi dan database berhasil berjalan menggunakan Docker Compose.

<p align="center">
  <img src="screenshot/docker-compose.png" width="850">
</p>

---

# Pengujian Container

## Menampilkan Container yang Berjalan

```bash
docker ps
```

### Hasil

Container yang berhasil berjalan:

- `final-project-app`
- `final-project-db`

<p align="center">
  <img src="screenshot/docker-ps.png" width="850">
</p>

---

# Pengujian Docker Volume

## Melihat Docker Volume

```bash
docker volume ls
```

### Hasil

Docker volume `mysql_data` berhasil dibuat dan digunakan untuk menyimpan data database secara persisten.

<p align="center">
  <img src="screenshot/docker-volume.png" width="850">
</p>

---

# Pengujian Docker Network

## Melihat Docker Network

```bash
docker network ls
```

### Hasil

Docker Compose berhasil membuat network otomatis untuk komunikasi antar-container.

<p align="center">
  <img src="screenshot/docker-network.png" width="850">
</p>

---

# Pengujian Endpoint API

## 1. GET /users

### Request

```bash
GET http://localhost:3000/users
```

### Response

```json
[]
```

<p align="center">
  <img src="screenshot/get-users.png" width="850">
</p>

---

## 2. POST /users

### Request

```json
{
  "name": "Yehezkiel",
  "email": "yehezkiel@gmail.com"
}
```

### Response

```json
{
  "message": "User added"
}
```

<p align="center">
  <img src="screenshot/post-users.png" width="850">
</p>

---

## 3. PUT /users/1

### Response

```json
{
  "message": "User updated"
}
```

<p align="center">
  <img src="screenshot/put-users.png" width="850">
</p>

---

## 4. DELETE /users/1

### Response

```json
{
  "message": "User deleted"
}
```

<p align="center">
  <img src="screenshot/delete-users.png" width="850">
</p>

---

# Pengujian Upload ke Docker Hub

## Build Docker Image

```bash
docker build -t username/final-project-app .
```

## Push Docker Image

```bash
docker push username/final-project-app
```

### Hasil

Docker image berhasil di-upload ke Docker Hub.

<p align="center">
  <img src="screenshot/dockerhub.png" width="850">
</p>

---

# Teknologi yang Digunakan

- Node.js
- Express.js
- MySQL
- Docker
- Docker Compose

---

# Kesimpulan

Project berhasil mengimplementasikan aplikasi multi-container menggunakan Docker dan Docker Compose dengan integrasi antara Node.js dan MySQL.

Seluruh fitur utama berhasil dijalankan dengan baik, meliputi:

- CRUD API
- Docker Compose orchestration
- Docker Volume
- Docker Network
- Environment Variables
- Upload image ke Docker Hub

Project ini menunjukkan bagaimana Docker dapat digunakan untuk mempermudah proses deployment dan pengelolaan aplikasi berbasis container.