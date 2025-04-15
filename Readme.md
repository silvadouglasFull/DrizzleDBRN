# Drizzle ORM with React Native (Expo)

This project uses **Drizzle ORM** with **Expo SQLite** in a **React Native** environment, following clean architecture and SOLID principles.

## 📦 Requirements

- Node.js >= 18
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- SQLite installed on the device (handled by Expo)
- `ts-node` and `drizzle-kit` for running seeds and migrations

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
```

### 2. Configure environment (optional)

If needed, copy .env.example to .env and adjust the values.

### 3. Run the project on a device

```bash
npm run start
```

# or

```bash
expo start
```

Scan the QR Code with Expo Go on your mobile device or launch an emulator.

### 4. Run database migrations

```bash
npx drizzle-kit push
```

### 5. Run seeders (optional)

```bash
npm run seed:users
```
