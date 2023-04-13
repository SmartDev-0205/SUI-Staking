
import { useEffect, useState } from "react"
import { ConnectButton, useWalletKit } from "@mysten/wallet-kit"
import { Layout } from "../components/layouts/layout"

export const HomePage = () => {
  const [unStake, setUnStake] = useState(false)

  const { currentAccount } = useWalletKit();
  const [address, setAddress] = useState('')
  useEffect(() => {
    if (currentAccount?.address) {
      let tempAddr = currentAccount?.address;
      setAddress(tempAddr.slice(0, 4) + '...' + tempAddr.slice(-4))
    }
  }, [currentAccount])

  return (
    <Layout>
      <div className="flex-1 flex flex-col gap-50 items-center">
        <div className="flex flex-row gap-20 flex-wrap justify-center">
          <div className="w-250 flex flex-col gap-5 mm:gap-10 lg:gap-15 bg-foreground px-10 mm:px-15 lg:px-20 py-10 mm:py-15 lg:py-20 rounded-md">
            <span className="text-10 mm:text-12 opacity-50">Total SUI Staked</span>
            <span className="text-15 mm:text-20 font-bold">6.84M SUI</span>
            <span className="text-12 mm:text-15 font-semibold">= $ 13.88M</span>
          </div>

          <div className="w-250 flex flex-col gap-5 mm:gap-10 lg:gap-15 bg-foreground px-10 mm:px-15 lg:px-20 py-10 mm:py-15 lg:py-20 rounded-md">
            <span className="text-10 mm:text-12 opacity-50">LiSUI / SUI Price</span>
            <span className="text-15 mm:text-20 font-bold">1.10855 SUI</span>
            <span className="text-12 mm:text-15 font-semibold">= $ 2.88</span>
          </div>

          <div className="w-250 flex flex-col gap-5 mm:gap-10 lg:gap-15 bg-foreground px-10 mm:px-15 lg:px-20 py-10 mm:py-15 lg:py-20 rounded-md">
            <span className="text-10 mm:text-12 opacity-50">LiSUI / SUI Price</span>
            <span className="text-15 mm:text-20 font-bold">1.10855 SUI</span>
            <span className="text-12 mm:text-15 font-semibold">= $ 2.88</span>
          </div>

          <div className="w-250 flex flex-col gap-5 mm:gap-10 lg:gap-15 bg-foreground px-10 mm:px-15 lg:px-20 py-10 mm:py-15 lg:py-20 rounded-md">
            <span className="text-10 mm:text-12 opacity-50">Validators Staked</span>
            <span className="text-15 mm:text-20 font-bold">69</span>
            <span className="text-12 mm:text-15 font-semibold"></span>
          </div>
        </div>

        <div className="flex flex-col gap-30 items-center">
          <div className="flex flex-col items-center text-center">
            <span className="text-30 md:text-40 lg:text-50 font-bold">Stake Your SUI</span>
            <span className="text-12 md:text-15 lg:text-18 opacity-50">Stake SUI and receive SUI while earning staking rewards</span>
          </div>

          <div className="flex flex-row gap-5 p-5 bg-foreground rounded-full">
            <div onClick={() => { setUnStake(false) }}
              className={`w-100 md:w-120 lg:w-150 py-5 md:py-8 lg:py-10 ${!unStake && ('bg-primary')} rounded-full text-center cursor-pointer switch-item`}
            >
              <span className="text-15 md:text-18 lg:text-20 font-semibold">Stake</span>
            </div>

            <div onClick={() => { setUnStake(true) }}
              className={`w-100 md:w-120 lg:w-150 py-5 md:py-8 lg:py-10 ${unStake && ('bg-primary')} rounded-full text-center cursor-pointer switch-item`}
            >
              <span className="text-15 md:text-18 lg:text-20 font-semibold">Unstake</span>
            </div>
          </div>

          <div className="w-full max-w-500 flex flex-col gap-15 md:gap-18 lg:gap-20 px-15 md:px-18 lg:px-20 py-15 md:py-18 lg:py-20 bg-modalBg rounded-md">
            <div className="flex flex-col px-15 md:px-18 lg:px-20 py-10 md:py-12 lg:py-15 bg-foreground rounded-md">
              <div className="flex flex-row gap-10 justify-between items-center py-10 md:py-15 lg:py-20">
                <div className="flex flex-row gap-5 md:gap-10 items-center">
                  <div className="w-20 md:w-30 h-20 md:h-30 bg-white rounded-full" />
                  <span className="text-15 md:text-18 lg:text-20 font-semibold">NERA</span>
                </div>

                <div className="flex flex-row gap-10 items-center">
                  <span className="text-12 md:text-15 opacity-50">
                    SUI amount to stake
                  </span>

                  <span className="text-15 md:text-18 lg:text-20 font-bold text-primary">MAX</span>
                </div>
              </div>

              <div className="border-t-2 border-text py-5 md:py-8 lg:py-10">
                <span className="text-12 md:text-15 opacity-50">Balance: 0 SUI</span>
              </div>
            </div>

            {!unStake && (
              <div className="flex flex-row justify-between">
                <span className="text-12 md:text-15 opacity-80">You will receive</span>
                <span className="text-12 md:text-15 opacity-80">0.000 SUI</span>
              </div>
            )}

            {!!unStake && (
              <div className="grid grid-cols-2 gap-10 md:gap-15 lg:gap-20">
                <div className="flex flex-col gap-10 md:gap-15 lg:gap-20 p-10 md:p-15 lg:p-20 bg-foreground rounded-md">
                  <div className="flex flex-col gap-5 md:gap-10">
                    <span className="text-12 md:text-13">Instant unstake</span>
                    <ul className="item-list pl-20">
                      <li className="text-13 md:text-15">SUI</li>
                    </ul>

                  </div>

                  <span className="text-11 md:text-12 opacity-50">Unstake fee: 0.05%</span>
                </div>

                <div className="flex flex-col gap-10 md:gap-15 lg:gap-20 p-10 md:p-15 lg:p-20 bg-foreground rounded-md">
                  <div className="flex flex-col gap-5 md:gap-10">
                    <span className="text-12 md:text-13">Delayed unstake in 2 days</span>
                    <ul className="item-list pl-20">
                      <li className="text-13 md:text-15">SUI</li>
                    </ul>

                  </div>

                  <span className="text-11 md:text-12 opacity-50">Unstake fee: 0</span>
                </div>
              </div>
            )}

            <ConnectButton
              connectedText={address}
              connectText={"Connect Wallet"}
              className="bg-primary px-10 py-10 md:py-15 rounded-lg text-center cursor-pointer text-12 md:text-15 font-semibold"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}