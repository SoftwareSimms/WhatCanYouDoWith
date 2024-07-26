package main

import (
    "github.com/gofiber/fiber/v2"
    "github.com/gofiber/fiber/v2/middleware/logger"
    "github.com/gofiber/fiber/v2/middleware/recover"
    "whatcanyoudowith/handlers"
    "whatcanyoudowith/utils"
)

func main() {
    // Initialize Fiber app
    app := fiber.New()

    // Use middleware
    app.Use(logger.New())
    app.Use(recover.New())

    // Initialize database connection
    utils.ConnectDB()

    // Define routes
    app.Get("/api/usecases", handlers.GetUseCases)
    app.Get("/api/concretenouns", handlers.GetConcreteNouns)
    app.Get("/api/resources", handlers.GetResources)

    // Start server
    app.Listen(":3000")
}
