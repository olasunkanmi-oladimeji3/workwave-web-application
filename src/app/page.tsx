import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Users, Calendar, BanknoteIcon,Check } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div >
      <Hero />
      <FeatureSection />
      <TestimonialSection />
      <PricingSection />
      <CtaSection  />
      
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-background py-32 px-4 sm:py-32 md:py-20 lg:py-32">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Streamline Your Business with <span className="text-primary">Workwave</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-lg sm:max-w-2xl mx-auto">
          All-in-one business management platform for small to large enterprises.
          Boost productivity, manage finances, and grow your business.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row sm:justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/auth/signup">Start Free Trial</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Financial Management",
    description: "Track expenses, manage invoices, and generate financial reports with ease.",
    icon: BanknoteIcon,
  },
  {
    title: "HR Solutions",
    description: "Streamline payroll, manage leave requests, and maintain employee records.",
    icon: Users,
  },
  {
    title: "Project Management",
    description: "Plan, track, and collaborate on projects to meet deadlines and achieve goals.",
    icon: Calendar,
  },
  {
    title: "Business Analytics",
    description: "Gain insights with customizable reports and real-time data visualization.",
    icon: BarChart,
  },
]

export function FeatureSection() {
  return (
    <section id="features" className="bg-muted py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="mx-auto text-center">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Workwave has transformed how we manage our business. The all-in-one solution saves us time and money.",
    avatar: "/avatar1.png",
  },
  {
    name: "Michael Chen",
    role: "Operations Manager, GrowFast Ltd.",
    content: "The project management tools in Workwave have significantly improved our team's productivity and collaboration.",
    avatar: "/avatar2.png",
  },
  {
    name: "Emily Rodriguez",
    role: "HR Director, InnovateCorp",
    content: "Managing payroll and leave requests has never been easier. Workwave's HR solutions are a game-changer.",
    avatar: "/avatar3.png",
  },
]

function TestimonialSection() {
  return (
    <section id="testimonials" className=" py-11 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">&quot;{testimonial.content}&quot;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
const plans = [
  {
    name: "Freemium",
    price: "₦0",
    description: "Basic tools for small teams",
    features: [
      "Basic tools for Accounting",
      "HR Management",
      "Project Management",
      "Up to 5 Employees",
    ],
  },
  {
    name: "Starter",
    price: "₦5,000/month",
    description: "Starter tools for growing teams",
    features: [
      "Basic tools for Accounting",
      "HR Management",
      "Project Management",
      "Payroll",
      "Basic Analytics",
      "Up to 10 Employees",
    ],
  },
  {
    name: "Growth",
    price: "₦10,000/month",
    description: "Advanced tools for scaling teams",
    features: [
      "Starter tools",
      "Productivity Tracking",
      "Advanced Analytics",
      "Up to 50 Employees",
      "₦1,500/employee",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    description: "Tailored solutions for large organizations",
    features: [
      "Growth tools",
      "Custom Integrations",
      "API Access",
      "Unlimited Employees",
      "Dedicated support",
    ],
  },
];


 function PricingSection() {
  return (
    <section id="pricing" className="bg-muted py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Flexible Pricing Plans</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {plans.map((plan, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-2xl font-bold mb-4">{plan.price}</div>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose Plan</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="bg-primary text-primary-foreground py-24 px-4 md:px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Streamline Your Business?</h2>
        <p className="text-xl mb-8">
          Join thousands of businesses already using Workwave to boost productivity and growth.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/auth/signup">Start Your Free Trial</Link>
        </Button>
      </div>
    </section>
  )
}