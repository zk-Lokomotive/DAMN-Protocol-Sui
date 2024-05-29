<script>
    import { onMount } from "svelte";
    import { userStore } from "../stores";

    let gpus = [];

    $: user = $userStore;

    onMount(async () => {
        const response = await fetch("http://localhost:3000/gpus", {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        });
        gpus = await response.json();
    });

    async function leaseGPU(gpuId) {
        await fetch(`http://localhost:3000/lease/${gpuId}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        });
    }
</script>

<main>
    <h3>Available GPUs</h3>
    <ul>
        {#each gpus as gpu}
            <li>
                {gpu.name} - {gpu.price} Sui
                <button on:click={() => leaseGPU(gpu.id)}
                    >Rent GPU with Sui</button
                >
            </li>
        {/each}
    </ul>
</main>
