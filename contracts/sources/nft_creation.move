module nft_creation {
    struct NFT {
        id: u64,
        owner: address,
        metadata: String,
    }

    public fun create_nft(id: u64, metadata: String) {
        let nft = NFT {
            id,
            owner: &signer,
            metadata,
        };
        move_to(&signer, nft);
    }

    public fun transfer_nft(id: u64, new_owner: &signer) {
        let nft = borrow_global_mut<NFT>(&signer);
        assert!(nft.owner == &signer, 1);
        nft.owner = &new_owner;
    }
}
