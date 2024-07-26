package handlers

import (
    "github.com/gofiber/fiber/v2"
    "whatcanyoudowith/utils"
    "github.com/neo4j/neo4j-go-driver/neo4j"
)

// GetUseCases handles requests to fetch use cases
func GetUseCases(c *fiber.Ctx) error {
    driver := utils.GetDriver()
    session, err := driver.Session(neo4j.AccessModeRead)
    if err != nil {
        return c.Status(500).SendString(err.Error())
    }
    defer session.Close()

    result, err := session.Run("MATCH (uc:UseCase) RETURN uc", nil)
    if err != nil {
        return c.Status(500).SendString(err.Error())
    }

    useCases := []map[string]interface{}{}
    for result.Next() {
        useCases = append(useCases, result.Record().GetByIndex(0).(neo4j.Node).Props())
    }

    return c.JSON(useCases)
}
