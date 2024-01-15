import "./Tag.css";

const TagCard = () => {
  const Tags = [
    { id: "1", place: "New York" },
    { id: "2", place: "Travel" },
    { id: "3", place: "London" },
    { id: "4", place: "IKEA" },
    { id: "5", place: "NORWAY" },
    { id: "6", place: "DIY" },
    { id: "7", place: "Ideas" },
    { id: "8", place: "Baby" },
    { id: "9", place: "Family" },
    { id: "10", place: "News" },
    { id: "11", place: "Clothing" },
    { id: "12", place: "Shopping" },
    { id: "13", place: "Sports" },
    { id: "14", place: "Games" },
  ];

  return (
    <div className="tagCard">
      <div className="tagHead">
        <h4 className="tagTittle">Tags</h4>
      </div>
      <div className="tagcontent">
      {Tags.map((tag) => (
        <div className="tagSubHead" key={tag.id}>
          <div className="tagSubTittle">
            <div className="tagName">
              <h4 className="tagNamePlace">{tag.place}</h4>
            </div>
          </div>
        </div>
      ))}
       </div>
    </div>
  );
};

export default TagCard;

/* <span>Travel</span>
<span>London</span>
<span>IKEA</span>
<span>NORWAY</span>
<span>DIY</span>
<span>Ideas</span>
<span>Baby</span>
<span>New York</span>
<span>Travel</span>
<span>London</span>
<span>IKEA</span>
<span>NORWAY</span>
<span>DIY</span>
<span>Ideas</span>
<span>Baby</span> */
