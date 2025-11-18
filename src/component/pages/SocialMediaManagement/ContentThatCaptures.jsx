import styles from '@/style/marketingAutomation.module.css'

export const ContentThatCaptures = () => {
    return (
        <div className={`${styles.frame} py-30 text-white`}> {/* Assuming text-white for overall text color if not already set by styles.frame */}
            <h2 className="text-4xl font-bold mb-6">Content That Captures and Converts</h2>
            <br />
            <p className="mb-4">
                Creating Content For Social Media Is Our Forte. BrandStory Crafts Posts That Engage, Educate, And Convert. We Produce High-Quality Posts And Manage Interactions To Ensure Your Audience Feels Valued.
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2"> {/* Added space-y-2 for gap between list items */}
                <li>Branded Visuals, Graphics, And Carousel Content That Tell Your Story And Boost Engagement.</li>
                <li>Short Form Video, Reels, And Motion Graphics Crafted For Instant Impact.</li>
                <li>Explainer Videos That Make Your Products Or Services Easy To Understand.</li>
            </ul>

            <p className="mb-4">
                We Produce 1000+ Posts Every Month For Global Brands. Every Piece Is Designed To Reflect Your Voice, Resonate With Your Audience, And Drive Results. Our Social Media Engagement Services Ensure Your Audience Feels Heard.
            </p>

            <ul className="list-disc list-inside mb-6 space-y-2"> {/* Added space-y-2 for gap between list items */}
                <li>Respond To Comments And DMs Promptly</li>
                <li>Moderate Discussions And Maintain A Positive Brand Image</li>
                <li>Support In Local Languages And Crisis Situations</li>
                <li>Follow Brand Persona Guidelines For Consistency</li>
            </ul>

            <p className="text-[#F15D22] text-lg font-semibold mt-8"> {/* Applied the specific color, increased text size and weight */}
                We Don’t Just Create Content. We Spark Engagement, Loyalty, And Conversions. Every Post And Interaction Drives Your Brand Forward.
            </p>
        </div>
    )
}