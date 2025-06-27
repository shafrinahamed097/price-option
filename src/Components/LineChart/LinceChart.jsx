import {LineChart as LChart, Line, XAxis, YAxis} from 'recharts';

const LinceChart = () => {
    
  
    const studentData = [
      { name: "Ayaan", math: 78, physics: 72, chemistry: 80 },
      { name: "Sara", math: 85, physics: 90, chemistry: 88 },
      { name: "Rafi", math: 92, physics: 87, chemistry: 91 },
      { name: "Lamia", math: 66, physics: 60, chemistry: 70 },
      { name: "Tariq", math: 74, physics: 69, chemistry: 75 },
      { name: "Nabila", math: 88, physics: 85, chemistry: 90 },
      { name: "Imran", math: 81, physics: 79, chemistry: 77 },
      { name: "Maya", math: 95, physics: 93, chemistry: 89 },
      { name: "Zubair", math: 69, physics: 70, chemistry: 65 },
      { name: "Farah", math: 90, physics: 88, chemistry: 92 }
    ];
  return (
    <div>

        <LChart width={800} height={400} data={studentData} >
            <XAxis dataKey="name" />
            <YAxis />
            <Line dataKey="math" stroke='red' />     
            <Line dataKey="physics" stroke="yellow" />     
            <Line dataKey="chemistry" stroke="green" />     
        </LChart>
        
      
    </div>
  );
};

export default LinceChart;