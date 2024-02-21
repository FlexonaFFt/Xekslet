const withoutTwoZeros = (zeros, ones) => {
    const memory = [];
    const iter = (zeros, ones) => {
        if (memory[zeros] && memory[zeros][ones] !== undefined) {
            return memory[zeros][ones];
        };

        if (zeros > 1) {
            const result = ones === 0 ? 1 : iter(zeros - 1, ones) + iter(zeros - 2, ones);
            memo[zeros] = memo[zeros] || [];
            memo[zeros][ones] = result;
            return result;
        };

        return 1;
    };

    return iter(zeros, ones);
};

export default withoutTwoZeros;