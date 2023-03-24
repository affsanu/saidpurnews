import React from "react";
import {
    Typography,
    Button,
    Card,
    CardBody,
} from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function PricingCard({ title, name, donors, options, isGrid }) {
    return (
        <Card className="border border-blue-gray-50">
            <CardBody className="p-8 text-center">
                <div className="mb-8 inline-flex items-center rounded-full bg-blue-50 py-1 pl-1 pr-3">
                    <Typography
                        variant="small"
                        className="mr-3 rounded-full bg-white py-px px-3 font-medium text-blue-500"
                    >
                        {title}
                    </Typography>
                    <Typography color="blue" variant="small" className="font-medium">
                        {name}
                    </Typography>
                </div>
                <Typography variant="h3" color="blue-gray" className="mb-2">
                    {donors}
                </Typography>

                <ul className={`my-8 ${isGrid? "grid grid-cols-2" : "flex flex-col"} gap-3 border-y border-blue-gray-50 py-6`}>
                    {options.map((option, key) => (
                        <li key={key} className="flex items-center gap-2">
                            <CheckCircleIcon
                                className="h-6 w-6 text-blue-500"
                                strokeWidth={2}
                            />
                            <Typography color="gray" className="font-normal opacity-80">
                                {option}
                            </Typography>
                        </li>
                    ))}
                </ul>
                <Button size="lg" fullWidth>
                    আরো জানুন
                </Button>
            </CardBody>
        </Card>
    );
}

export function AboutUs() {

    const cards = [
        {
            title: "আমাদের",
            name: "পরিবার",
            donors: "২০ হাজার সদস্য",
            isGrid: true,
            options: [
                `A+ : ২২১০`,
                `A- : ১১০০`,
                `B+ : ১৫৪২`,
                `B- : ৯৫৪১`,
                `AB+ : ১২৪৫`,
                `AB- : ১৪২৫`,
                `O+ : ১১১১`,
                `O- : ৫২৭০`,
            ],
        },
        {
            title: "রক্তদানে",
            name: "উপকারিতা",
            donors: "সুস্থতা যাচাই",
            isGrid: false,
            options: [
                "হৃদরোগের ঝুঁকি কমানো",
                "ক্যান্সারের ঝুঁকি কমানো",
                "বাড়তি ওজন হ্রাস",
                "প্রাণবন্ততা ও কর্মক্ষমতা বৃদ্ধি",
            ],
        },
        {
            title: "রক্তদাতাদের",
            name: "তালিকা",
            donors: "ক্রমানুসারে",
            isGrid: false,
            options: [
                `৫০ বার : ৭৩ জন`,
                `২৫ বার : ২৩৬৯ জন`,
                `১০ বার : ১১৩৩৩ জন`,
                `৩ বার : ৫২২৬৭ জন`,
            ],
        },
    ];

    return (
        <section>
            <div className="min-h-[24vh] bg-blue-600 px-8 pt-16 pb-24">
                <div className="container mx-auto text-center">
                    <Typography variant="h2" color="white" className="mb-2">
                        <span className="my-bangla">রক্তদানে উদ্বুদ্ধ হোন</span>
                    </Typography>
                    <Typography
                        variant="lead"
                        color="white"
                        className="mb-8 opacity-70 space-x-2"
                    >
                        <span className="text-sm">
                            “...আর যখন কেউ কোনো মানুষের জীবন রক্ষা করল, সে যেন সমগ্র মানবজাতির জীবন রক্ষা করল”
                        </span>
                        <Link to="https://alquran.org.bd/surah/ab/5/32" rel="noreferrer" className="text-sm text-pink-900">(সূরা মায়েদা : ৩২)</Link>
                    </Typography>
                </div>
            </div>
            <div className="-mt-32 px-8 pt-8 pb-16">
                <div className="container mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {cards.map((props, key) => (
                        <PricingCard key={key} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutUs;