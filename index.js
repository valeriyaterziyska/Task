const data = [
    {
        price_per_day: 2,
        from: "2020-01-01 ",
        to: "2020-01-01",
        added: "2019-06-01",
    },
    {
        price_per_day: 60,
        from: "2020-01-03",
        to: "2020-01-08",
        added: "2019-06-02",
    },
    {
        price_per_day: 15,
        from: "2020-01-05",
        to: "2020-01-06",
        added: "2019-06-01",
    },
    {
        price_per_day: 150,
        from: "2020-01-08",
        to: "2020-01-15",
        added: "2019-06-15",
    },
];

function calc(data) {
    data.forEach((bike) => {
        let price_per_day = Number(bike.price_per_day);
        let start_day = bike.from.split("-");
        let end_day = bike.to.split("-");

        let days = Number(end_day[2]) - Number(start_day[2]) + 1;
        let total_price_for_bike = price_per_day * days;
        
        console.log(price_per_day, days, total_price_for_bike);
    });
}

calc(data);
