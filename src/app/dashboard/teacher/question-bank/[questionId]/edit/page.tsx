"use client"
import { useParams } from "next/navigation"
import { useState } from "react"
import { DashboardShell } from "@/modules/dashboard/dashboard-shell"
import { QuestionForm } from "@/modules/questions/question-form"
import { questionService } from "@/modules/questions/question-service"
import type { Question } from "@/modules/questions/question-types"
export default function EditQuestionPage() { const { questionId } = useParams<{ questionId: string }>(); const [question] = useState<Question | undefined>(() => questionService.getById(questionId)); return <DashboardShell role="teacher">{question ? <QuestionForm existing={question} /> : <div className="rounded-xl border border-dashed p-10 text-center"><p className="font-semibold">Question not found</p></div>}</DashboardShell> }
