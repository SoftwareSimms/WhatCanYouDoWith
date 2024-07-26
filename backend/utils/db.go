package utils

import (
    "log"
    "github.com/neo4j/neo4j-go-driver/neo4j"
)

var driver neo4j.Driver

// ConnectDB initializes connection to Neo4j database
func ConnectDB() {
    var err error
    driver, err = neo4j.NewDriver("bolt://localhost:7687", neo4j.BasicAuth("username", "password", ""))
    if err != nil {
        log.Fatal(err)
    }
}

// GetDriver returns the Neo4j driver
func GetDriver() neo4j.Driver {
    return driver
}
