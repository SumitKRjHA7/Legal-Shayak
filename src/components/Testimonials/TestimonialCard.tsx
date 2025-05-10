interface TestimonialCardProps {
  name: string;
  position: string;
  content: string;
  avatar: string;
}

const TestimonialCard = ({ name, position, content, avatar }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <img 
          src={avatar} 
          alt={name} 
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-600">{position}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{content}"</p>
    </div>
  );
};

export default TestimonialCard;