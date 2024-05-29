<script>
    import { userStore, imageStore } from "../stores";

    $: user = $userStore;
    $: imageUrl = $imageStore;

    async function createNFT() {
        await fetch("http://localhost:3000/nft", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
            body: JSON.stringify({ image: imageUrl }),
        });
    }
</script>

<main>
    <button on:click={createNFT}>Generate NFT</button>
</main>
