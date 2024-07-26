package handlers

import (
    "github.com/gofiber/fiber/v2"
    "whatcanyoudowith/utils"
    "github.com/neo4j/neo4j-go-driver/neo4j"
)

// GetConcreteNouns handles requests to fetch concrete nouns
func GetConcreteNouns(c *fiber.Ctx) error {
    driver := utils.GetDriver()
    session, err := driver.Session(neo4j.AccessModeRead)
    if err != nil {
        return c.Status(500).SendString(err.Error())
    }
    defer session.Close()

    result, err := session.Run("MATCH (cn:ConcreteNoun) RETURN cn", nil)
    if err != nil {
        return c.Status(500).SendString(err.Error())
    }

    concreteNouns := []map[string]interface{}{}
    for result.Next() {
        concreteNouns = append(concreteNouns, result.Record().GetByIndex(0).(neo4j.Node).Props())
    }

    return c.JSON(concreteNouns)
}
