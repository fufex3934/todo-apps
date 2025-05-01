import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/db";
import { Todo } from "@/app/models/Todo";

export async function GET() {
  await dbConnect();
  const todos = await Todo.find().sort({ createdAt: -1 });
  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  await dbConnect();
  const body = await request.json();
  const todo = await Todo.create(body);
  return NextResponse.json(todo);
}

export async function PUT(request: Request) {
  await dbConnect();
  const { id, ...updatedData } = await request.json();
  const todo = await Todo.findByIdAndUpdate(id, updatedData, { new: true });
  return NextResponse.json(todo);
}

export async function DELETE(request: Request) {
  await dbConnect();
  const { id } = await request.json();
  await Todo.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
