package main

// User model
type User struct {
    ID         int      `json:"id"`
    Name       string   `json:"name"`
    Email      string   `json:"email"`
    Provider   string   `json:"provider"`
    SavedItems []string `json:"saved_items"`
}

// UseCase model
type UseCase struct {
    ID          int      `json:"id"`
    Title       string   `json:"title"`
    Description string   `json:"description"`
}

// ConcreteNoun model
type ConcreteNoun struct {
    ID   int    `json:"id"`
    Name string `json:"name"`
}

// Resource model
type Resource struct {
    ID           int    `json:"id"`
    UseCaseID    int    `json:"use_case_id"`
    ConcreteNounID int  `json:"concrete_noun_id"`
    Link         string `json:"link"`
    Title        string `json:"title"`
}
