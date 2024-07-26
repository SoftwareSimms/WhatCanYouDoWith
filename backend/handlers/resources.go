package handlers

import (
    "github.com/gofiber/fiber/v2"
    "whatcanyoudowith/utils"
    "github.com/neo4j/neo4j-go-driver/neo4j"
)

// GetResources handles requests to fetch resources
func GetResources(c *fiber.Ctx) error {
    driver := utils.GetDriver()
    session, err := driver.Session(neo4j.AccessModeRead)
    if err != nil {
        return c.Status(500).SendString(err.Error())
    }
    defer session.Close()

    result, err := session.Run("MATCH (r:Resource) RETURN r", nil)
    if err != nil {
        return c.Status(500).SendString(err.Error())
    }

    resources := []map[string]interface{}{}
    for result.Next() {
        resources = append(resources, result.Record().GetByIndex(0).(neo4j.Node).Props())
    }

    return c.JSON(resources)
}
