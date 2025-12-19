import { ChevronRight, Calendar, User, Clock } from "lucide-react";
import { Link } from "@heroui/link";
import { notFound } from "next/navigation";

import { createClient } from "@/lib/supabase-server";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();

  const { data: post, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !post) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-12 pb-24">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-slate-500">
        <Link className="hover:text-white" href="/">
          خانه
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link className="hover:text-white" href="/blog">
          وبلاگ
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-slate-300">{post.title}</span>
      </nav>

      <article className="mx-auto max-w-4xl flex flex-col gap-8">
        <header className="flex flex-col gap-6 text-center">
          <h1 className="ds-title text-3xl md:text-4xl lg:text-5xl leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(post.published_at).toLocaleDateString("fa-IR")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>مطالعه ۱۰ دقیقه</span>
            </div>
          </div>
        </header>

        {/* Cover Image Placeholder */}
        <div className="ds-card-glow aspect-video w-full overflow-hidden rounded-2xl bg-slate-900/50 flex items-center justify-center">
          <div className="text-center">
             <Calendar className="mx-auto h-20 w-20 text-blue-500/10" />
             <p className="mt-4 text-sm text-slate-500">تصویر مقاله</p>
          </div>
        </div>

        <div className="ds-card p-8 md:p-12">
          <div className="prose prose-invert max-w-none text-slate-300 leading-loose">
            {/* Split content by newlines to create paragraphs for now */}
            {post.content.split('\n').map((para: string, idx: number) => (
              <p key={idx} className="mb-6">{para}</p>
            ))}
          </div>
        </div>

        <footer className="ds-card-muted p-8 text-center">
          <h3 className="text-lg font-bold text-white">از خواندن این مطلب لذت بردید؟</h3>
          <p className="mt-2 text-slate-400">
            ما هر هفته مطالب جدیدی در مورد طراحی، سئو و رشد کسب‌وکار منتشر می‌کنیم.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link className="ds-btn ds-btn-primary px-6" href="/contact">
              مشاوره رایگان بگیرید
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
