import { Button, Card } from "keep-react";

const MenuCard = () => {
  return (
    <Card className="h-full w-full">
      {/* menu image */}
      <Card.Header className="">
        <p className="p-2 text-right font-semibold text-gray-500">27th may, 2024</p>
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
          className="w-full h-60 object-fill"
        />
      </Card.Header>
      <Card.Content className="space-y-2 p-3 flex flex-col justify-between">
        {/* name of the menu */}
        <Card.Title>Polao Roast</Card.Title>
        <Card.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam animi voluptas perspiciatis quidem esse!
        </Card.Description>
        <Button size="sm" color="secondary" className="w-1/2 ">
          Select menu
        </Button>
      </Card.Content>
    </Card>
  );
};

export default MenuCard;
