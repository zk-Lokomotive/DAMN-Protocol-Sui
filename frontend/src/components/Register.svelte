<script>
    import { userStore } from "../stores";

    let username = "";
    let password = "";

    function register() {
        fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert("Registration successful!");
                    userStore.set({ username });
                } else {
                    alert("Registration failed!");
                }
            });
    }
</script>

<main>
    <h1>Register</h1>
    <input type="text" bind:value={username} placeholder="Username" />
    <input type="password" bind:value={password} placeholder="Password" />
    <button on:click={register}>Register</button>
</main>
