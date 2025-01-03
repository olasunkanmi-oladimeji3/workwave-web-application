import Image from "next/legacy/image"
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">About BusinessPro</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          We are on a mission to revolutionize business management with cutting-edge technology and unparalleled user experience.
        </p>
      </section>

      <section className="mb-16">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
            <p className="mb-4 text-muted-foreground">
              Founded in 2023, BusinessPro emerged from a simple idea: that managing a business should be intuitive, efficient, and even enjoyable. Our founders, seasoned entrepreneurs themselves, experienced firsthand the challenges of juggling multiple tools and platforms to run their operations.
            </p>
            <p className="mb-4 text-muted-foreground">
              Driven by the vision of a unified, all-in-one solution, they assembled a team of top-tier developers, designers, and business experts. Together, we have created a platform that streamlines every aspect of business management, from employee productivity to financial oversight.
            </p>
            <Button className="self-start">Learn More</Button>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Team collaborating in an office"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Values</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Innovation", description: "We constantly push the boundaries of what's possible in business management software." },
            { title: "Simplicity", description: "We believe powerful tools don't have to be complicated. Ease of use is at the core of our design philosophy." },
            { title: "Security", description: "We prioritize the safety and privacy of our clients' data with state-of-the-art security measures." },
            { title: "Customer-Centric", description: "Our customers' success is our success. We're dedicated to providing unparalleled support and continuously improving based on user feedback." },
            { title: "Integrity", description: "We operate with transparency and honesty in all our dealings, building trust with our clients and partners." },
            { title: "Adaptability", description: "In a rapidly changing business landscape, we stay agile and help our clients do the same." },
          ].map((value, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Meet Our Team</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            { name: "Jane Doe", role: "CEO & Co-founder", image: "/placeholder.svg?height=300&width=300" },
            { name: "John Smith", role: "CTO & Co-founder", image: "/placeholder.svg?height=300&width=300" },
            { name: "Emily Johnson", role: "Head of Design", image: "/placeholder.svg?height=300&width=300" },
            { name: "Michael Brown", role: "Lead Developer", image: "/placeholder.svg?height=300&width=300" },
          ].map((member, index) => (
            <Card key={index}>
              <CardContent className="p-4 text-center">
                <div className="mb-4 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
                <h3 className="mb-1 text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="mb-4 text-3xl font-bold">Join Us on Our Journey</h2>
        <p className="mb-6 text-muted-foreground">
          We are always looking for talented individuals to join our team and help shape the future of business management.
        </p>
        <Button size="lg">View Career Opportunities</Button>
      </section>
    </div>
  )
}