import connectDB from "@/lib/mongobd";
import courseSchema from "@/model/course";

export async function GET(req) {
  try {
    await connectDB();
    const courses = await courseSchema.find({});
    return Response.json(courses, { status: 200 });
  } catch (error) {
    console.error("Error fetching courses:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json(); // For reading request body
    const course = await courseSchema.create(body);
    return Response.json(course, { status: 201 });
  } catch (error) {
    console.error("Error creating course:", error);
    return Response.json(
      { message: "Failed to create course" },
      { status: 500 }
    );
  }
}
