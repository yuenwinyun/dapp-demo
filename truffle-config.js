module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*",
        },
    },
    compilers: {
        solc: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
    contracts_directory: "./src/contracts/",
    contracts_build_directory: "./src/contracts/abi",
};
