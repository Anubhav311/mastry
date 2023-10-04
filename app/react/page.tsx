import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const list = [
  {
    topic: "Landing Page with React",
    recording: "https://www.youtube.com/watch?v=O0spVr4fZa4",
    assignment:
      "https://github.com/Anubhav311/react-assignments/blob/main/week-4/assignment.md",
  },
];

export default function Home() {
  return (
    <div style={{ width: "100%" }}>
      <Table>
        <TableCaption>A list of React classes and assignments.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>S. No.</TableHead>
            <TableHead>Topic</TableHead>
            <TableHead>Recording</TableHead>
            <TableHead className="text-right">Assignment</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell>{item.topic}</TableCell>
              <TableCell>
                <a
                  href={item.recording}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  YouTube
                </a>
              </TableCell>
              <TableCell className="text-right">
                <a
                  href={item.assignment}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
