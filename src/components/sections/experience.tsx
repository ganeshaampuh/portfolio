import PAST_ROLES from '@/data/experience'

export default function Experience() {
  return (
    <div className="mb-10 mt-10">
      <h2 className="mb-8 text-xl font-heading sm:text-2xl">Experience</h2>

      {PAST_ROLES.map((role, id) => {
        return (
          <div className="mb-8" key={id}>
            <h3 className="text-lg font-heading sm:text-xl">
              {role.role} @ {role.company}
            </h3>
            <p className="mb-4 mt-0.5 text-sm">
              {role.startDate} - {role.endDate}
            </p>
            <p>
              {role.description}
            </p>
            <ul className="list-disc pl-5">
              {role.achievements.map((achievement, id) => (
                <li key={id}>{achievement}</li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
