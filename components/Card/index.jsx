import Main from "./body";

export default function Card({
  companyName,
  location,
  mode,
  description,
  name,
  position,
}) {
  return (
    <div>
      <Main
        companyName="HelperDev"
        location="Abuja, Nigeria"
        mode="Remote"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ipsam? Officia "
        name="John Doe"
        position="CEO"
      />
    </div>
  );
}
