# 🚀 Vibemy

**Build something with Vibemy** - Create apps and websites by chatting with AI

Vibemy is an innovative AI-powered development platform that allows you to build full-stack applications through natural language conversations. Simply describe what you want to build, and Vibemy's AI agent will create, modify, and deploy your applications in real-time using isolated sandbox environments.

## ✨ Features

### 🤖 AI-Powered Development

- **Natural Language Interface**: Describe your ideas in plain English
- **Real-time Code Generation**: Watch your applications come to life instantly
- **Intelligent Code Assistant**: AI agent that understands context and builds upon previous work

### 🏗️ Sandbox Environment

- **Isolated Development**: Each project runs in its own secure E2B sandbox
- **Live Preview**: See your applications running in real-time
- **Pre-configured Stack**: Next.js 15.3.3 with Tailwind CSS and Shadcn/ui components

### 📱 Project Management

- **Project Organization**: Create and manage multiple projects
- **Message History**: Full conversation history with the AI
- **Template Gallery**: Quick-start templates for common applications

### 🎨 Modern Tech Stack

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Shadcn/ui** components
- **Prisma** with PostgreSQL
- **Clerk** for authentication
- **tRPC** for type-safe APIs
- **E2B** for sandboxed execution

## 🎯 Project Templates

Get started quickly with our pre-built templates.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- Clerk account for authentication
- E2B API key for sandboxes

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Aneesh35/vibemy.git
   cd vibemy
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file with:

   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/vibemy"
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   
   # E2B Sandbox
   E2B_API_KEY=your_e2b_api_key
   
   # Inngest
   INNGEST_EVENT_KEY=your_inngest_key
   INNGEST_SIGNING_KEY=your_signing_key
   ```

4. **Set up the database**

   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Architecture

### Core Components

- **Frontend**: Next.js 15 with React Server Components
- **Backend**: tRPC for type-safe API routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk for user management
- **AI Processing**: Inngest functions with OpenAI GPT-4
- **Sandboxes**: E2B for isolated code execution
- **Styling**: Tailwind CSS with Shadcn/ui components

### Data Models

- **Projects**: User-created development projects
- **Messages**: Conversation history between user and AI
- **Fragments**: Generated code snippets with live previews
- **Usage**: Rate limiting and quota management

### AI Agent Workflow

1. **User Input**: Natural language description of desired application
2. **Context Analysis**: AI analyzes previous messages and project state
3. **Code Generation**: AI generates and modifies files in sandbox
4. **Live Execution**: Code runs immediately in isolated environment
5. **Response Generation**: AI provides explanation and next steps

## 🔧 Configuration

### Sandbox Templates

Vibemy uses E2B sandboxes with pre-configured environments:

- Next.js 15.3.3 application structure
- All Shadcn/ui components pre-installed
- Tailwind CSS configuration
- Development server auto-start

### AI Prompts

The AI agent uses specialized prompts for different tasks:

- **Code Generation**: Context-aware development in Next.js environment
- **Fragment Titles**: Descriptive naming for code snippets
- **Response Generation**: User-friendly explanations

## 🚦 Usage Limits

Vibemy implements usage tracking to manage AI processing:

- Point-based system for API calls
- Rate limiting for fair usage
- Upgrade options for higher limits

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open database browser

### Database Migrations

When modifying the schema:

```bash
npx prisma migrate dev --name your_migration_name
npx prisma generate
```

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.
