---
id: javascript-gists
title: TypeScript Gists
sidebar_label: Gists
slug: /client-integration/javascript/gists
---


# Initialize PsyOptions Market

````TypeScript
const initializeMarket = async (
  /** the keypair of the wallet creating the market */
  wallet: Keypair,
  /** The full underlying amount per contract **including the quote asset decimal places** */
  underlyingAmountPerContract: BigNumber,
  /** The full quoteAmountPerContract **including the quote asset decimal places** */
  quoteAmountPerContract: BigNumber,
  /** The public key for the underlying asset mint */
  underlyingAssetMintKey: PublicKey,
  /** The public key for the quote asset mint */
  quoteAssetMintKey: PublicKey,
  /* The unix time stamp for the contract expiration **in seconds** */
  expirationUnixTimestamp: number,
) => {
  // Create and send transaction for creating/initializing accounts needed
  // for option market
  const {
    transaction: createAccountsTx,
    signers,
    optionMintKey,
    writerTokenMintKey,
    quoteAssetPoolKey,
    underlyingAssetPoolKey,
  } = await initializeAccountsForMarket({
    connection,
    payerKey: wallet.publicKey,
    programId,
  })
  await connection.sendTransaction(createAccountsTx, signers)

  // create and send transaction for initializing the option market
  const initializeMarketIx = await initializeMarketInstruction({
    programId,
    fundingAccountKey: wallet.publicKey,
    underlyingAssetMintKey,
    quoteAssetMintKey,
    optionMintKey,
    writerTokenMintKey,
    underlyingAssetPoolKey,
    quoteAssetPoolKey,
    underlyingAmountPerContract: underlyingAmountPerContract.toNumber(),
    quoteAmountPerContract: quoteAmountPerContract.toNumber(),
    expirationUnixTimestamp,
  })
  const transaction = new Transaction()
  transaction.add(initializeMarketIx)
  await connection.sendTransaction(transaction, [])
  const [optionMarketKey] = await Market.getDerivedAddressFromParams({
    programId,
    underlyingAssetMintKey,
    quoteAssetMintKey,
    underlyingAmountPerContract: underlyingAmountPerContract.toNumber(),
    quoteAmountPerContract: quoteAmountPerContract.toNumber(),
    expirationUnixTimestamp,
  })
  return optionMarketKey
}
````


