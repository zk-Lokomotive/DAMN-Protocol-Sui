<script>
    import { userStore, imageStore } from "../stores";

    let text = "";
    let imageUrl = "";

    $: user = $userStore;

    function generateImage() {
        fetch("http://localhost:3000/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
            body: JSON.stringify({ text }),
        })
            .then((response) => response.json())
            .then((data) => {
                imageUrl = data.image;
                imageStore.set(imageUrl);
            });
    }
</script>

<main>
    <input type="text" bind:value={text} placeholder="Enter Description" />
    <button on:click={generateImage}>Generate Image</button>
    {#if imageUrl}
        <img src={imageUrl} alt="Generated Image" />
    {/if}
</main>
