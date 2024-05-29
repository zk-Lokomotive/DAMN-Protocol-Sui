module gpu_leasing {
    struct GPU {
        id: u64,
        name: String,
        price: u64,
        owner: address,
        leased_to: Option<address>,
    }

    public fun register_gpu(id: u64, name: String, price: u64) {
        let gpu = GPU {
            id,
            name,
            price,
            owner: &signer,
            leased_to: None,
        };
        move_to(&signer, gpu);
    }

    public fun lease_gpu(id: u64, leaser: &signer) {
        let gpu = borrow_global_mut<GPU>(&signer);
        assert!(gpu.leased_to == None, 1);
        gpu.leased_to = Some(&leaser);
    }

    public fun end_lease(id: u64) {
        let gpu = borrow_global_mut<GPU>(&signer);
        assert!(gpu.leased_to != None, 2);
        gpu.leased_to = None;
    }
}
