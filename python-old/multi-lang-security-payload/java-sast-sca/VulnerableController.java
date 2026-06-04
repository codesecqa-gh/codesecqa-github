import java.io.IOException;
import java.sql.Connection;
import java.sql.Statement;

public class VulnerableController {
    public void queryUser(Connection conn, String id) throws Exception {
        // TEST ONLY: intentionally vulnerable SQL concatenation.
        String sql = "SELECT * FROM users WHERE id = " + id;
        Statement st = conn.createStatement();
        st.executeQuery(sql);
    }

    public void runCommand(String command) throws IOException {
        // TEST ONLY: intentionally vulnerable command execution.
        Runtime.getRuntime().exec(command);
    }
}
