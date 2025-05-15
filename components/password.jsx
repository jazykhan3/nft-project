'use client';
import { useEffect, useState } from "react";

const PASSWORD = process.env.NEXT_PUBLIC_SITE_PASSWORD ;

export default function PasswordWall({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true); // NEW STATE
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState('');
console.log("PASSWORD", PASSWORD);
  useEffect(() => {
    const storedPassword = localStorage.getItem('site_password');
    if (storedPassword === PASSWORD) {
      setIsAuthenticated(true);
    }
    setCheckingAuth(false); // Done checking
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === PASSWORD) {
      localStorage.setItem('site_password', passwordInput);
      setIsAuthenticated(true);
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  // ⏳ Prevent flash during initial check
  if (checkingAuth) return null;

  if (isAuthenticated) return children;

  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay}>
        <h1>🔐 Private Access Only</h1>
        <p>This version of Aweh.ventures is restricted. Enter the password below to continue.</p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="password"
            placeholder="Enter password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Enter</button>
        </form>
        {error && <p style={styles.error}>{error}</p>}
        <p style={styles.note}>
          This is a private and confidential site. By accessing it, you agree not to share its content without permission.
        </p>
      </div>
    </div>
  );
}


const styles = {
  wrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    background: "#fff",
    padding: "40px",
    borderRadius: "8px",
    maxWidth: "400px",
    textAlign: "center",
      color: "#666",
  },
  form: {
    marginTop: "20px",
  },
  input: {
    padding: "10px",
    width: "80%",
    marginBottom: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
  note: {
    marginTop: "20px",
    fontSize: "12px",
    color: "#666",
  },
};
