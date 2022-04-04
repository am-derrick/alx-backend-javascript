function getCurrentYear() {
    cosnt date = new Date();
    return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
    const budget = {
	income: `income-${getCurrentYear()}`,
	gdp: `gdp-${getCurrentYear()}`,
	capita: `capit-${getCurrentYear()}`,
    };

    return budget;
}
