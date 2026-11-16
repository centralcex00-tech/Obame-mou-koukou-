tuclass MemoryManager {
  constructor() {
    this.memories = [];
  }

  save(userId, message) {
    if (!userId || !message) {
      throw new Error("Utilisateur et message obligatoires.");
    }

    const memory = {
      id: Date.now(),
      userId,
      message,
      date: new Date().toISOString()
    };

    this.memories.push(memory);

    return memory;
  }

  getMemories(userId) {
    return this.memories.filter(
      memory => memory.userId === userId
    );
  }

  deleteMemory(id) {
    this.memories = this.memories.filter(
      memory => memory.id !== id
    );
  }

  clearUserMemory(userId) {
    this.memories = this.memories.filter(
      memory => memory.userId !== userId
    );
  }
}

module.exports = new MemoryManager();
