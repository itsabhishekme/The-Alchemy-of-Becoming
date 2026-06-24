import { NextRequest, NextResponse } from "next/server";

export interface Story {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  readTime: number;
  featured: boolean;
  image: string;
  tags: string[];
  publishedAt: string;
}

const stories: Story[] = [
  {
    id: "1",
    slug: "the-day-failure-became-my-teacher",
    title: "The Day Failure Became My Teacher",
    excerpt:
      "A journey through setbacks that ultimately revealed strength, purpose, and clarity.",
    content:
      "Failure often arrives disguised as disappointment. Yet in many lives, it becomes the greatest teacher...",
    author: "Sophia Carter",
    category: "Resilience",
    readTime: 8,
    featured: true,
    image: "/images/stories/failure-teacher.jpg",
    tags: ["resilience", "growth", "purpose"],
    publishedAt: "2026-01-15",
  },
  {
    id: "2",
    slug: "learning-to-begin-again",
    title: "Learning To Begin Again",
    excerpt:
      "After losing everything, rebuilding became the greatest gift of all.",
    content:
      "There are moments when life asks us to start over. Though painful, these moments often reveal our deepest strengths...",
    author: "Michael Bennett",
    category: "Transformation",
    readTime: 10,
    featured: true,
    image: "/images/stories/begin-again.jpg",
    tags: ["transformation", "reinvention"],
    publishedAt: "2026-02-10",
  },
  {
    id: "3",
    slug: "the-quiet-power-of-healing",
    title: "The Quiet Power of Healing",
    excerpt:
      "How small acts of self-compassion transformed years of emotional struggle.",
    content:
      "Healing rarely happens all at once. It is often a gradual process of small choices and quiet courage...",
    author: "Emma Wilson",
    category: "Healing",
    readTime: 6,
    featured: false,
    image: "/images/stories/healing.jpg",
    tags: ["healing", "self-care"],
    publishedAt: "2026-03-01",
  },
];

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

/**
 * GET
 *
 * Examples:
 *
 * /api/stories
 * /api/stories?featured=true
 * /api/stories?category=Healing
 * /api/stories?search=healing
 * /api/stories?limit=5
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const featured = searchParams.get("featured");
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const limit = searchParams.get("limit");

    let results = [...stories];

    if (featured === "true") {
      results = results.filter((story) => story.featured);
    }

    if (category) {
      results = results.filter(
        (story) =>
          story.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search) {
      const query = search.toLowerCase();

      results = results.filter(
        (story) =>
          story.title.toLowerCase().includes(query) ||
          story.excerpt.toLowerCase().includes(query) ||
          story.content.toLowerCase().includes(query) ||
          story.tags.some((tag) =>
            tag.toLowerCase().includes(query)
          )
      );
    }

    if (limit) {
      const parsedLimit = Number(limit);

      if (!Number.isNaN(parsedLimit)) {
        results = results.slice(0, parsedLimit);
      }
    }

    return NextResponse.json(
      {
        success: true,
        total: results.length,
        stories: results,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("GET Stories Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch stories",
      },
      {
        status: 500,
      }
    );
  }
}

/**
 * POST
 *
 * Create Story
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      title,
      excerpt,
      content,
      author,
      category,
      image,
      tags,
    } = body;

    if (!title) {
      return NextResponse.json(
        {
          success: false,
          message: "Title is required",
        },
        {
          status: 400,
        }
      );
    }

    if (!excerpt) {
      return NextResponse.json(
        {
          success: false,
          message: "Excerpt is required",
        },
        {
          status: 400,
        }
      );
    }

    if (!content) {
      return NextResponse.json(
        {
          success: false,
          message: "Content is required",
        },
        {
          status: 400,
        }
      );
    }

    if (!author) {
      return NextResponse.json(
        {
          success: false,
          message: "Author is required",
        },
        {
          status: 400,
        }
      );
    }

    const newStory: Story = {
      id: crypto.randomUUID(),
      slug: generateSlug(title),
      title,
      excerpt,
      content,
      author,
      category: category || "Personal Growth",
      image:
        image ||
        "/images/stories/default-story-cover.jpg",
      tags: tags || [],
      featured: false,
      readTime: Math.ceil(content.split(" ").length / 200),
      publishedAt: new Date().toISOString(),
    };

    stories.unshift(newStory);

    return NextResponse.json(
      {
        success: true,
        message: "Story created successfully",
        story: newStory,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("POST Story Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create story",
      },
      {
        status: 500,
      }
    );
  }
}

/**
 * OPTIONS
 *
 * CORS Support
 */
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        Allow: "GET, POST, OPTIONS",
      },
    }
  );
}