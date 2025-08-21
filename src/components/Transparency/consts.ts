import { AutopilotProduct, EarningsEntry } from "./Transparency";



 // Mock autopilot products data - with token denominated earnings
  export const autopilotProducts: AutopilotProduct[] = [
    {
      asset: "USDC",
      project: "Morpho",
      network: "Base",
      tvl: "5,247,890",
      allRebalances: 2847,
      rebalances30d: 421,
      totalEarnings: "381,909",
      totalEarningsAsset: "USDC",
      etherscanLink: "0x38989BBA00BDF8181F4082995b3DEAe96163aC5D",
      debankLink: "0x38989BBA00BDF8181F4082995b3DEAe96163aC5D"
    },
    {
      asset: "ETH",
      project: "Morpho",
      network: "Base",
      tvl: "4,598,230",
      allRebalances: 1923,
      rebalances30d: 287,
      totalEarnings: "38.90015",
      totalEarningsAsset: "ETH",
      etherscanLink: "0x73e4898a1Bfa9f710B6A6AB516403A6299e01fc6",
      debankLink: "0x73e4898a1Bfa9f710B6A6AB516403A6299e01fc6"
    },
    {
      asset: "cbBTC",
      project: "Morpho",
      network: "Base",
      tvl: "6,001,200",
      allRebalances: 1456,
      rebalances30d: 198,
      totalEarnings: "3.812201",
      totalEarningsAsset: "cbBTC",
      etherscanLink: "0x186514400e52270cEF3D80e1c6F8d10A75d47344",
      debankLink: "0x186514400e52270cEF3D80e1c6F8d10A75d47344"
    }
  ];

  // Mock TVL and earnings data
  export const protocolStats = {
    tvl: "15,847,320",
    totalEarningsAllTime: "6,265,693",
    totalEarnings30d: "521,847",
    totalEarnings7d: "119,234",
    totalEarnings24h: "16,892"
  };

  // Mock detailed earnings breakdown with pagination - 10 items per page with 60% reduced values
  // cbBTC = $120,000, ETH = $4,500, USDC = $1
  export const allEarningsData: EarningsEntry[][] = [
    // Page 1
    [
      {
        date: "2025-01-17",
        time: "14:32",
        asset: "USDC",
        project: "Morpho",
        network: "Base",
        amount: "972.50",
        value: "972.50",
        txHash: "0x7f4a...8c9e"
      },
      {
        date: "2025-01-17",
        time: "11:48",
        asset: "ETH",
        project: "Morpho",
        network: "Base",
        amount: "0.16426",
        value: "739.15",
        txHash: "0x3e2d...7b1f"
      },
      {
        date: "2025-01-17",
        time: "08:15",
        asset: "cbBTC",
        project: "Morpho",
        network: "Base",
        amount: "0.01089",
        value: "1,307.04",
        txHash: "0x9a5c...4d2e"
      },
      {
        date: "2025-01-16",
        time: "22:48",
        asset: "USDC",
        project: "Morpho",
        network: "Base",
        amount: "1,100.53",
        value: "1,100.53",
        txHash: "0x6b8f...3a9c"
      },
      {
        date: "2025-01-16",
        time: "19:22",
        asset: "ETH",
        project: "Morpho",
        network: "Base",
        amount: "0.38083",
        value: "1,713.74",
        txHash: "0x2c7e...5f8a"
      },
      {
        date: "2025-01-16",
        time: "15:17",
        asset: "cbBTC",
        project: "Morpho",
        network: "Base",
        amount: "0.01604",
        value: "1,925.28",
        txHash: "0x8d4a...6e2c"
      },
      {
        date: "2025-01-16",
        time: "11:33",
        asset: "USDC",
        project: "Morpho",
        network: "Base",
        amount: "1,539.01",
        value: "1,539.01",
        txHash: "0x4f1b...9d7e"
      },
      {
        date: "2025-01-16",
        time: "07:28",
        asset: "ETH",
        project: "Morpho",
        network: "Base",
        amount: "0.19162",
        value: "862.29",
        txHash: "0x7c9a...2e5f"
      },
      {
        date: "2025-01-15",
        time: "23:12",
        asset: "cbBTC",
        project: "Morpho",
        network: "Base",
        amount: "0.01214",
        value: "1,457.28",
        txHash: "0xa1b2...c3d4"
      },
      {
        date: "2025-01-15",
        time: "18:56",
        asset: "USDC",
        project: "Morpho",
        network: "Base",
        amount: "758.27",
        value: "758.27",
        txHash: "0xe5f6...g7h8"
      }
    ],
    // Page 2
    [
      {
        date: "2025-01-15",
        time: "14:33",
        asset: "ETH",
        project: "Morpho",
        network: "Base",
        amount: "0.26198",
        value: "1,178.93",
        txHash: "0i9j0...k1l2"
      },
      {
        date: "2025-01-15",
        time: "10:18",
        asset: "cbBTC",
        project: "Morpho",
        network: "Base",
        amount: "0.01141",
        value: "1,368.96",
        txHash: "0m3n4...o5p6"
      },
      {
        date: "2025-01-15",
        time: "06:07",
        asset: "USDC",
        project: "Morpho",
        network: "Base",
        amount: "702.77",
        value: "702.77",
        txHash: "0q7r8...s9t0"
      },
      {
        date: "2025-01-14",
        time: "21:42",
        asset: "ETH",
        project: "Morpho",
        network: "Base",
        amount: "0.25187",
        value: "1,133.42",
        txHash: "0u1v2...w3x4"
      },
      {
        date: "2025-01-14",
        time: "17:29",
        asset: "cbBTC",
        project: "Morpho",
        network: "Base",
        amount: "0.01376",
        value: "1,650.72",
        txHash: "0y5z6...a7b8"
      },
      {
        date: "2025-01-14",
        time: "13:14",
        asset: "USDC",
        project: "Morpho",
        network: "Base",
        amount: "678.33",
        value: "678.33",
        txHash: "0c7d8...e9f0"
      },
      {
        date: "2025-01-14",
        time: "09:51",
        asset: "ETH",
        project: "Morpho",
        network: "Base",
        amount: "0.25200",
        value: "1,134.00",
        txHash: "0g1h2...i3j4"
      },
      {
        date: "2025-01-14",
        time: "05:27",
        asset: "cbBTC",
        project: "Morpho",
        network: "Base",
        amount: "0.01083",
        value: "1,299.36",
        txHash: "0k5l6...m7n8"
      },
      {
        date: "2025-01-13",
        time: "22:13",
        asset: "USDC",
        project: "Morpho",
        network: "Base",
        amount: "1,029.56",
        value: "1,029.56",
        txHash: "0o9p0...q1r2"
      },
      {
        date: "2025-01-13",
        time: "18:36",
        asset: "ETH",
        project: "Morpho",
        network: "Base",
        amount: "0.49983",
        value: "2,249.24",
        txHash: "0s3t4...u5v6"
      }
    ]
  ];