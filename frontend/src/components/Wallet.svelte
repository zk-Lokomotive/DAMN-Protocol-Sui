<script>
    import { onMount } from "svelte";
    import { connectWallet, getWallet } from "@suiet/wallet-kit";
    import { userStore } from "../stores";

    let wallet;

    onMount(async () => {
        wallet = await getWallet();
    });

    async function connect() {
        await connectWallet();
        wallet = await getWallet();
        userStore.set(wallet);
    }
</script>

<main>
    <button on:click={connect}>Cüzdanı Bağla</button>
    {#if wallet}
        <p>Cüzdan Bağlı: {wallet.address}</p>
    {/if}
</main>
