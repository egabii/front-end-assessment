import { Modal } from "@/ui/modal";
import { Button } from "@/ui/button";
import useCardGameStore from "@/store";

import { RocketIcon, HeartFilledIcon } from "@radix-ui/react-icons";

export default function WinnerModal() {
  const AllmatchedCards = useCardGameStore((state) =>
    state.cards.every((card) => card.matched)
  );
  const resetGame = useCardGameStore((state) => state.resetGame);
  return (
    <>
      {AllmatchedCards && (
        <Modal>
          <>
            <Modal.Content>
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <RocketIcon width={24} height={24} />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    You Win!!!
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 modal-content-text">
                      I did this game with{" "}
                      {
                        <HeartFilledIcon
                          style={{
                            display: "inline-block",
                            position: "relative",
                            top: "-2px",
                          }}
                        />
                      }
                      . Do you like it? Please, consider this assestment for
                      next stage &#9824;
                    </p>
                    <p className="text-sm text-gray-500">
                      Do you want to play again?
                    </p>
                  </div>
                </div>
              </div>
            </Modal.Content>
            <Modal.Footer>
              <Button
                onClick={() => {
                  resetGame();
                }}
                className="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                New Game!
              </Button>
            </Modal.Footer>
          </>
        </Modal>
      )}
    </>
  );
}
