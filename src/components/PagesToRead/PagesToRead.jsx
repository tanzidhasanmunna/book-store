import { useLoaderData } from "react-router-dom";
import { getWhiteListBooks } from "../../localStorage";


import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function PagesToRead() {
  // ... rest of the code

  const allBooks = useLoaderData();
  const wishBookId = getWhiteListBooks();
  const wishBooks = allBooks.filter((book) => wishBookId.includes(book.bookId));

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart width={730} height={250} data={wishBooks}>
          <CartesianGrid strokeDasharray="3,3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Tooltip />
          <Legend/>
          <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {wishBooks.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
