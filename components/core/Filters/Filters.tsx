import { useTodoStore } from '@/stores/todoStore'
import { MouseEvent, useState } from 'react'

const filterStates = {
  all: {
    id: 'all',
    name: 'All',
  },
  completed: {
    id: 'completed',
    name: 'Completed',
  },
  incomplete: {
    id: 'Incomplete',
    name: 'incomplete',
  },
}
export const Filters = () => {
  const [activeFiler, setActiveFilter] = useState('all')
  const fullList = useTodoStore((state) => state.fullList)
  const completedList = useTodoStore((state) => state.completedList)
  const uncompletedList = useTodoStore((state) => state.uncompletedList)

  const setFilter = (event: MouseEvent) => {
    const target = event.target as HTMLSpanElement

    if (target.id === 'all') {
      setActiveFilter('all')
      fullList()
    }

    if (target.id === 'completed') {
      setActiveFilter('completed')
      completedList()
    }

    if (target.id === 'incomplete') {
      setActiveFilter('incomplete')
      uncompletedList()
    }
  }
  return (
    <div className="text-sm mt-4" onClick={(event) => setFilter(event)}>
      <span className="text-dark-blue-gray/[.59] pr-3">Show:</span>

      <Filter
        id={filterStates.all.id}
        name={filterStates.all.name}
        active={activeFiler === filterStates.all.id}
      />
      <Filter
        id={filterStates.completed.id}
        name={filterStates.completed.name}
        active={activeFiler === filterStates.completed.id}
      />
      <Filter
        id={filterStates.incomplete.id}
        name={filterStates.incomplete.name}
        active={activeFiler === filterStates.incomplete.id}
      />
    </div>
  )
}

const Filter = ({ id, name, active }: { id: string; name: string; active: boolean }) => {
  const filterStateStyles = {
    active: 'text-dark-blue-grey',
    inactive: 'text-dark-sky-blue underline cursor-pointer',
  }
  return (
    <span
      id={id}
      className={`pr-2 ${active ? filterStateStyles.active : filterStateStyles.inactive}`}
    >
      {name}
    </span>
  )
}
