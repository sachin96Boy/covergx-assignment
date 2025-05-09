# ----- Development Stage -----
    FROM node:alpine AS development

    WORKDIR /usr/src/app
    
    # Copy package files
    COPY package.json pnpm-lock.yaml tsconfig.json nest-cli.json ./ 
    COPY apps/todoapp/prisma ./prisma

    # Install pnpm globally
    RUN npm install -g pnpm
    
    # Install NestJS CLI globally
    # RUN pnpm add -g @nestjs/cli
    
    
    # Install all dependencies (including dev)
    RUN pnpm 
    
    RUN pnpm prisma generate
    
    # Copy the rest of the app
    COPY . .
    
    # Build the application
    RUN pnpm run build
    
    # ----- Production Stage -----
    FROM node:alpine AS production
    
    # Set environment variable
    ARG NODE_ENV=production
    ENV NODE_ENV=${NODE_ENV}

    WORKDIR /usr/src/app

    COPY package.json ./
    COPY pnpm-lock.yaml ./
        
    # Install pnpm globally
    RUN npm install -g pnpm
    
    # Install only production dependencies
    RUN pnpm install --prod
    
    # Copy built files from the development stage
    COPY --from=development /usr/src/app/dist ./dist
    
    # Set the command to run the app
    CMD ["pnpm","run", "start:prod", "dist/apps/todoapp/main.js"]
    