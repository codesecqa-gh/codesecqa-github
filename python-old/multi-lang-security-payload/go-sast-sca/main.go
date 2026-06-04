package main

import (
    "database/sql"
    "net/http"
    "os/exec"
)

func userHandler(db *sql.DB, w http.ResponseWriter, r *http.Request) {
    id := r.URL.Query().Get("id")
    // TEST ONLY: intentionally vulnerable SQL concatenation.
    db.Query("SELECT * FROM users WHERE id = " + id)
}

func runHandler(w http.ResponseWriter, r *http.Request) {
    cmd := r.URL.Query().Get("cmd")
    // TEST ONLY: intentionally vulnerable command execution.
    exec.Command("sh", "-c", cmd).Output()
}

func main() {}
