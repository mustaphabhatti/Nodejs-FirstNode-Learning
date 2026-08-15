const runtimeError = () => {
    let a = 10;
    a();
};

module.exports = runtimeError;