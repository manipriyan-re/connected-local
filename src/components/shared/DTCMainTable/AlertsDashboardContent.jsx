import Card from "@/components/shared/Card/Card";
import Line_Common from "../LineCommon/LineCommon";
import AlertCommon from "../AlertMap/AlertCommon";

const AlertsDashboardContent = ({ theme }) => {
  const cards = [
    {
      id: 1,
      title: "# Emergency",
      value: 258,
      percentage: 50,
      description: "Compared last week",
    },
    {
      id: 2,
      title: "# Alerts",
      value: 120,
      percentage: -10,
      description: "Compared last week",
    },
    {
      id: 3,
      title: "# Notifications",
      value: 400,
      percentage: 30,
      description: "Compared last week",
    },
    {
      id: 4,
      title: "# Emergency",
      value: 258,
      percentage: 50,
      description: "Compared last week",
    },
    {
      id: 5,
      title: "# Alerts",
      value: 120,
      percentage: -10,
      description: "Compared last week",
    },
    {
      id: 6,
      title: "# Notifications",
      value: 400,
      percentage: 30,
      description: "Compared last week",
    },
  ];
  return (
    <section className="alerts_dashboard_content_container">
      <div className="flex justify-between  gap-10 h-[22rem] ">
        <div className="grid grid-cols-3 gap-4 w-[55%]">
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              value={card.value}
              percentage={card.percentage}
              description={card.description}
            />
          ))}
        </div>

        <div className="flex p-2 bg-custom-gradient rounded-lg  content-start w-[45%]">
          <Line_Common theme={{ theme }} />
        </div>
      </div>
      <AlertCommon />
    </section>
  );
};

export default AlertsDashboardContent;
